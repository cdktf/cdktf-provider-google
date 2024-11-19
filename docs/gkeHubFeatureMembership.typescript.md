# `gkeHubFeatureMembership` Submodule <a name="`gkeHubFeatureMembership` Submodule" id="@cdktf/provider-google.gkeHubFeatureMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeatureMembership <a name="GkeHubFeatureMembership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembership(scope: Construct, id: string, config: GkeHubFeatureMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement">putConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh">putMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putPolicycontroller">putPolicycontroller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement">resetConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMembershipLocation">resetMembershipLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh">resetMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetPolicycontroller">resetPolicycontroller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigmanagement` <a name="putConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement"></a>

```typescript
public putConfigmanagement(value: GkeHubFeatureMembershipConfigmanagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `putMesh` <a name="putMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh"></a>

```typescript
public putMesh(value: GkeHubFeatureMembershipMesh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `putPolicycontroller` <a name="putPolicycontroller" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putPolicycontroller"></a>

```typescript
public putPolicycontroller(value: GkeHubFeatureMembershipPolicycontroller): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putPolicycontroller.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeHubFeatureMembershipTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

---

##### `resetConfigmanagement` <a name="resetConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement"></a>

```typescript
public resetConfigmanagement(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMembershipLocation` <a name="resetMembershipLocation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMembershipLocation"></a>

```typescript
public resetMembershipLocation(): void
```

##### `resetMesh` <a name="resetMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh"></a>

```typescript
public resetMesh(): void
```

##### `resetPolicycontroller` <a name="resetPolicycontroller" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetPolicycontroller"></a>

```typescript
public resetPolicycontroller(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubFeatureMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubFeatureMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFeatureMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.policycontroller">policycontroller</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference">GkeHubFeatureMembershipPolicycontrollerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput">configmanagementInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput">featureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipLocationInput">membershipLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput">meshInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.policycontrollerInput">policycontrollerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature">feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipLocation">membershipLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configmanagement`<sup>Required</sup> <a name="configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement"></a>

```typescript
public readonly configmanagement: GkeHubFeatureMembershipConfigmanagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a>

---

##### `mesh`<sup>Required</sup> <a name="mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh"></a>

```typescript
public readonly mesh: GkeHubFeatureMembershipMeshOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a>

---

##### `policycontroller`<sup>Required</sup> <a name="policycontroller" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.policycontroller"></a>

```typescript
public readonly policycontroller: GkeHubFeatureMembershipPolicycontrollerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference">GkeHubFeatureMembershipPolicycontrollerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFeatureMembershipTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a>

---

##### `configmanagementInput`<sup>Optional</sup> <a name="configmanagementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput"></a>

```typescript
public readonly configmanagementInput: GkeHubFeatureMembershipConfigmanagement;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput"></a>

```typescript
public readonly featureInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membershipLocationInput`<sup>Optional</sup> <a name="membershipLocationInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipLocationInput"></a>

```typescript
public readonly membershipLocationInput: string;
```

- *Type:* string

---

##### `meshInput`<sup>Optional</sup> <a name="meshInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput"></a>

```typescript
public readonly meshInput: GkeHubFeatureMembershipMesh;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `policycontrollerInput`<sup>Optional</sup> <a name="policycontrollerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.policycontrollerInput"></a>

```typescript
public readonly policycontrollerInput: GkeHubFeatureMembershipPolicycontroller;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeHubFeatureMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `membershipLocation`<sup>Required</sup> <a name="membershipLocation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipLocation"></a>

```typescript
public readonly membershipLocation: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureMembershipConfig <a name="GkeHubFeatureMembershipConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfig: gkeHubFeatureMembership.GkeHubFeatureMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature">feature</a></code> | <code>string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location">location</a></code> | <code>string</code> | The location of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership">membership</a></code> | <code>string</code> | The name of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membershipLocation">membershipLocation</a></code> | <code>string</code> | The location of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.policycontroller">policycontroller</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a></code> | policycontroller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project">project</a></code> | <code>string</code> | The project of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

The name of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#feature GkeHubFeatureMembership#feature}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#location GkeHubFeatureMembership#location}

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

The name of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#membership GkeHubFeatureMembership#membership}

---

##### `configmanagement`<sup>Optional</sup> <a name="configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement"></a>

```typescript
public readonly configmanagement: GkeHubFeatureMembershipConfigmanagement;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#configmanagement GkeHubFeatureMembership#configmanagement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `membershipLocation`<sup>Optional</sup> <a name="membershipLocation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membershipLocation"></a>

```typescript
public readonly membershipLocation: string;
```

- *Type:* string

The location of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#membership_location GkeHubFeatureMembership#membership_location}

---

##### `mesh`<sup>Optional</sup> <a name="mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh"></a>

```typescript
public readonly mesh: GkeHubFeatureMembershipMesh;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#mesh GkeHubFeatureMembership#mesh}

---

##### `policycontroller`<sup>Optional</sup> <a name="policycontroller" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.policycontroller"></a>

```typescript
public readonly policycontroller: GkeHubFeatureMembershipPolicycontroller;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a>

policycontroller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policycontroller GkeHubFeatureMembership#policycontroller}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#project GkeHubFeatureMembership#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeHubFeatureMembershipTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#timeouts GkeHubFeatureMembership#timeouts}

---

### GkeHubFeatureMembershipConfigmanagement <a name="GkeHubFeatureMembershipConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagement: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz">binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | binauthz block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync">configSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController">hierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | hierarchy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.management">management</a></code> | <code>string</code> | Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController">policyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | policy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version">version</a></code> | <code>string</code> | Optional. Version of ACM to install. Defaults to the latest version. |

---

##### `binauthz`<sup>Optional</sup> <a name="binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz"></a>

```typescript
public readonly binauthz: GkeHubFeatureMembershipConfigmanagementBinauthz;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

binauthz block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#binauthz GkeHubFeatureMembership#binauthz}

---

##### `configSync`<sup>Optional</sup> <a name="configSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync"></a>

```typescript
public readonly configSync: GkeHubFeatureMembershipConfigmanagementConfigSync;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#config_sync GkeHubFeatureMembership#config_sync}

---

##### `hierarchyController`<sup>Optional</sup> <a name="hierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController"></a>

```typescript
public readonly hierarchyController: GkeHubFeatureMembershipConfigmanagementHierarchyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

hierarchy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#hierarchy_controller GkeHubFeatureMembership#hierarchy_controller}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.management"></a>

```typescript
public readonly management: string;
```

- *Type:* string

Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}

---

##### `policyController`<sup>Optional</sup> <a name="policyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController"></a>

```typescript
public readonly policyController: GkeHubFeatureMembershipConfigmanagementPolicyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

policy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policy_controller GkeHubFeatureMembership#policy_controller}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Optional. Version of ACM to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}

---

### GkeHubFeatureMembershipConfigmanagementBinauthz <a name="GkeHubFeatureMembershipConfigmanagementBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementBinauthz: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether binauthz is enabled in this cluster. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether binauthz is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

### GkeHubFeatureMembershipConfigmanagementConfigSync <a name="GkeHubFeatureMembershipConfigmanagementConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementConfigSync: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables the installation of ConfigSync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git">git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.metricsGcpServiceAccountEmail">metricsGcpServiceAccountEmail</a></code> | <code>string</code> | The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift">preventDrift</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables the installation of ConfigSync.

If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git"></a>

```typescript
public readonly git: GkeHubFeatureMembershipConfigmanagementConfigSyncGit;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#git GkeHubFeatureMembership#git}

---

##### `metricsGcpServiceAccountEmail`<sup>Optional</sup> <a name="metricsGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.metricsGcpServiceAccountEmail"></a>

```typescript
public readonly metricsGcpServiceAccountEmail: string;
```

- *Type:* string

The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring.

The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#metrics_gcp_service_account_email GkeHubFeatureMembership#metrics_gcp_service_account_email}

---

##### `oci`<sup>Optional</sup> <a name="oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci"></a>

```typescript
public readonly oci: GkeHubFeatureMembershipConfigmanagementConfigSyncOci;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#oci GkeHubFeatureMembership#oci}

---

##### `preventDrift`<sup>Optional</sup> <a name="preventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift"></a>

```typescript
public readonly preventDrift: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#prevent_drift GkeHubFeatureMembership#prevent_drift}

---

##### `sourceFormat`<sup>Optional</sup> <a name="sourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#source_format GkeHubFeatureMembership#source_format}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncGit <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementConfigSyncGit: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">gcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | URL for the HTTPS proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir">policyDir</a></code> | <code>string</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType">secretType</a></code> | <code>string</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch">syncBranch</a></code> | <code>string</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo">syncRepo</a></code> | <code>string</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev">syncRev</a></code> | <code>string</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs">syncWaitSecs</a></code> | <code>string</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `gcpServiceAccountEmail`<sup>Optional</sup> <a name="gcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```typescript
public readonly gcpServiceAccountEmail: string;
```

- *Type:* string

The GCP Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

URL for the HTTPS proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#https_proxy GkeHubFeatureMembership#https_proxy}

---

##### `policyDir`<sup>Optional</sup> <a name="policyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir"></a>

```typescript
public readonly policyDir: string;
```

- *Type:* string

The path within the Git repository that represents the top level of the repo to sync.

Default: the root directory of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Type of secret configured for access to the Git repo.

Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `syncBranch`<sup>Optional</sup> <a name="syncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch"></a>

```typescript
public readonly syncBranch: string;
```

- *Type:* string

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_branch GkeHubFeatureMembership#sync_branch}

---

##### `syncRepo`<sup>Optional</sup> <a name="syncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo"></a>

```typescript
public readonly syncRepo: string;
```

- *Type:* string

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `syncRev`<sup>Optional</sup> <a name="syncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev"></a>

```typescript
public readonly syncRev: string;
```

- *Type:* string

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_rev GkeHubFeatureMembership#sync_rev}

---

##### `syncWaitSecs`<sup>Optional</sup> <a name="syncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```typescript
public readonly syncWaitSecs: string;
```

- *Type:* string

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncOci <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementConfigSyncOci: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">gcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir">policyDir</a></code> | <code>string</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType">secretType</a></code> | <code>string</code> | Type of secret configured for access to the OCI Image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo">syncRepo</a></code> | <code>string</code> | The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs">syncWaitSecs</a></code> | <code>string</code> | Period in seconds(int64 format) between consecutive syncs. Default: 15. |

---

##### `gcpServiceAccountEmail`<sup>Optional</sup> <a name="gcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```typescript
public readonly gcpServiceAccountEmail: string;
```

- *Type:* string

The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `policyDir`<sup>Optional</sup> <a name="policyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir"></a>

```typescript
public readonly policyDir: string;
```

- *Type:* string

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Type of secret configured for access to the OCI Image.

Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `syncRepo`<sup>Optional</sup> <a name="syncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo"></a>

```typescript
public readonly syncRepo: string;
```

- *Type:* string

The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `syncWaitSecs`<sup>Optional</sup> <a name="syncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```typescript
public readonly syncWaitSecs: string;
```

- *Type:* string

Period in seconds(int64 format) between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementHierarchyController <a name="GkeHubFeatureMembershipConfigmanagementHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementHierarchyController: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | **DEPRECATED** Configuring Hierarchy Controller through the configmanagement feature is no longer recommended. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota">enableHierarchicalResourceQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether hierarchical resource quota is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels">enablePodTreeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether pod tree labels are enabled in this cluster. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

**DEPRECATED** Configuring Hierarchy Controller through the configmanagement feature is no longer recommended. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `enableHierarchicalResourceQuota`<sup>Optional</sup> <a name="enableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota"></a>

```typescript
public readonly enableHierarchicalResourceQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether hierarchical resource quota is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enable_hierarchical_resource_quota GkeHubFeatureMembership#enable_hierarchical_resource_quota}

---

##### `enablePodTreeLabels`<sup>Optional</sup> <a name="enablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels"></a>

```typescript
public readonly enablePodTreeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether pod tree labels are enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enable_pod_tree_labels GkeHubFeatureMembership#enable_pod_tree_labels}

---

### GkeHubFeatureMembershipConfigmanagementPolicyController <a name="GkeHubFeatureMembershipConfigmanagementPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementPolicyController: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds">auditIntervalSeconds</a></code> | <code>string</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces">exemptableNamespaces</a></code> | <code>string[]</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled">logDeniesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled">mutationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable mutation in policy controller. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled">referentialRulesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled">templateLibraryInstalled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Installs the default template library along with Policy Controller. |

---

##### `auditIntervalSeconds`<sup>Optional</sup> <a name="auditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds"></a>

```typescript
public readonly auditIntervalSeconds: string;
```

- *Type:* string

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `exemptableNamespaces`<sup>Optional</sup> <a name="exemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces"></a>

```typescript
public readonly exemptableNamespaces: string[];
```

- *Type:* string[]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}

---

##### `logDeniesEnabled`<sup>Optional</sup> <a name="logDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled"></a>

```typescript
public readonly logDeniesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring"></a>

```typescript
public readonly monitoring: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}

---

##### `mutationEnabled`<sup>Optional</sup> <a name="mutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled"></a>

```typescript
public readonly mutationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable mutation in policy controller.

If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}

---

##### `referentialRulesEnabled`<sup>Optional</sup> <a name="referentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled"></a>

```typescript
public readonly referentialRulesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}

---

##### `templateLibraryInstalled`<sup>Optional</sup> <a name="templateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled"></a>

```typescript
public readonly templateLibraryInstalled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Installs the default template library along with Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#template_library_installed GkeHubFeatureMembership#template_library_installed}

---

### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring: gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends">backends</a></code> | <code>string[]</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `backends`<sup>Optional</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends"></a>

```typescript
public readonly backends: string[];
```

- *Type:* string[]

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}

---

### GkeHubFeatureMembershipMesh <a name="GkeHubFeatureMembershipMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipMesh: gkeHubFeatureMembership.GkeHubFeatureMembershipMesh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane">controlPlane</a></code> | <code>string</code> | **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management">management</a></code> | <code>string</code> | Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL. |

---

##### `controlPlane`<sup>Optional</sup> <a name="controlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane"></a>

```typescript
public readonly controlPlane: string;
```

- *Type:* string

**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#control_plane GkeHubFeatureMembership#control_plane}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management"></a>

```typescript
public readonly management: string;
```

- *Type:* string

Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}

---

### GkeHubFeatureMembershipPolicycontroller <a name="GkeHubFeatureMembershipPolicycontroller" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontroller: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller.property.policyControllerHubConfig">policyControllerHubConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a></code> | policy_controller_hub_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller.property.version">version</a></code> | <code>string</code> | Optional. Version of Policy Controller to install. Defaults to the latest version. |

---

##### `policyControllerHubConfig`<sup>Required</sup> <a name="policyControllerHubConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller.property.policyControllerHubConfig"></a>

```typescript
public readonly policyControllerHubConfig: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a>

policy_controller_hub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policy_controller_hub_config GkeHubFeatureMembership#policy_controller_hub_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Optional. Version of Policy Controller to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.auditIntervalSeconds">auditIntervalSeconds</a></code> | <code>number</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.constraintViolationLimit">constraintViolationLimit</a></code> | <code>number</code> | The maximum number of audit violations to be stored in a constraint. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.deploymentConfigs">deploymentConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]</code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.exemptableNamespaces">exemptableNamespaces</a></code> | <code>string[]</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.installSpec">installSpec</a></code> | <code>string</code> | Configures the mode of the Policy Controller installation. Possible values: INSTALL_SPEC_UNSPECIFIED, INSTALL_SPEC_NOT_INSTALLED, INSTALL_SPEC_ENABLED, INSTALL_SPEC_SUSPENDED, INSTALL_SPEC_DETACHED. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.logDeniesEnabled">logDeniesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.mutationEnabled">mutationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables the ability to mutate resources using Policy Controller. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.policyContent">policyContent</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | policy_content block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.referentialRulesEnabled">referentialRulesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |

---

##### `auditIntervalSeconds`<sup>Optional</sup> <a name="auditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.auditIntervalSeconds"></a>

```typescript
public readonly auditIntervalSeconds: number;
```

- *Type:* number

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}

---

##### `constraintViolationLimit`<sup>Optional</sup> <a name="constraintViolationLimit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.constraintViolationLimit"></a>

```typescript
public readonly constraintViolationLimit: number;
```

- *Type:* number

The maximum number of audit violations to be stored in a constraint.

If not set, the internal default of 20 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#constraint_violation_limit GkeHubFeatureMembership#constraint_violation_limit}

---

##### `deploymentConfigs`<sup>Optional</sup> <a name="deploymentConfigs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.deploymentConfigs"></a>

```typescript
public readonly deploymentConfigs: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#deployment_configs GkeHubFeatureMembership#deployment_configs}

---

##### `exemptableNamespaces`<sup>Optional</sup> <a name="exemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.exemptableNamespaces"></a>

```typescript
public readonly exemptableNamespaces: string[];
```

- *Type:* string[]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}

---

##### `installSpec`<sup>Optional</sup> <a name="installSpec" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.installSpec"></a>

```typescript
public readonly installSpec: string;
```

- *Type:* string

Configures the mode of the Policy Controller installation. Possible values: INSTALL_SPEC_UNSPECIFIED, INSTALL_SPEC_NOT_INSTALLED, INSTALL_SPEC_ENABLED, INSTALL_SPEC_SUSPENDED, INSTALL_SPEC_DETACHED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#install_spec GkeHubFeatureMembership#install_spec}

---

##### `logDeniesEnabled`<sup>Optional</sup> <a name="logDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.logDeniesEnabled"></a>

```typescript
public readonly logDeniesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.monitoring"></a>

```typescript
public readonly monitoring: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}

---

##### `mutationEnabled`<sup>Optional</sup> <a name="mutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.mutationEnabled"></a>

```typescript
public readonly mutationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables the ability to mutate resources using Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}

---

##### `policyContent`<sup>Optional</sup> <a name="policyContent" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.policyContent"></a>

```typescript
public readonly policyContent: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

policy_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#policy_content GkeHubFeatureMembership#policy_content}

---

##### `referentialRulesEnabled`<sup>Optional</sup> <a name="referentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig.property.referentialRulesEnabled"></a>

```typescript
public readonly referentialRulesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.componentName">componentName</a></code> | <code>string</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.containerResources">containerResources</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | container_resources block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podAffinity">podAffinity</a></code> | <code>string</code> | Pod affinity configuration. Possible values: AFFINITY_UNSPECIFIED, NO_AFFINITY, ANTI_AFFINITY. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podTolerations">podTolerations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]</code> | pod_tolerations block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.replicaCount">replicaCount</a></code> | <code>number</code> | Pod replica count. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#component_name GkeHubFeatureMembership#component_name}

---

##### `containerResources`<sup>Optional</sup> <a name="containerResources" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.containerResources"></a>

```typescript
public readonly containerResources: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

container_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#container_resources GkeHubFeatureMembership#container_resources}

---

##### `podAffinity`<sup>Optional</sup> <a name="podAffinity" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podAffinity"></a>

```typescript
public readonly podAffinity: string;
```

- *Type:* string

Pod affinity configuration. Possible values: AFFINITY_UNSPECIFIED, NO_AFFINITY, ANTI_AFFINITY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#pod_affinity GkeHubFeatureMembership#pod_affinity}

---

##### `podTolerations`<sup>Optional</sup> <a name="podTolerations" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podTolerations"></a>

```typescript
public readonly podTolerations: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]

pod_tolerations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#pod_tolerations GkeHubFeatureMembership#pod_tolerations}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Pod replica count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#replica_count GkeHubFeatureMembership#replica_count}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | requests block. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.limits"></a>

```typescript
public readonly limits: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#limits GkeHubFeatureMembership#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.requests"></a>

```typescript
public readonly requests: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#requests GkeHubFeatureMembership#requests}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.cpu">cpu</a></code> | <code>string</code> | CPU requirement expressed in Kubernetes resource units. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.memory">memory</a></code> | <code>string</code> | Memory requirement expressed in Kubernetes resource units. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#cpu GkeHubFeatureMembership#cpu}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#memory GkeHubFeatureMembership#memory}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.cpu">cpu</a></code> | <code>string</code> | CPU requirement expressed in Kubernetes resource units. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.memory">memory</a></code> | <code>string</code> | Memory requirement expressed in Kubernetes resource units. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#cpu GkeHubFeatureMembership#cpu}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#memory GkeHubFeatureMembership#memory}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.effect">effect</a></code> | <code>string</code> | Matches a taint effect. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.key">key</a></code> | <code>string</code> | Matches a taint key (not necessarily unique). |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.operator">operator</a></code> | <code>string</code> | Matches a taint operator. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.value">value</a></code> | <code>string</code> | Matches a taint value. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Matches a taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#effect GkeHubFeatureMembership#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Matches a taint key (not necessarily unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#key GkeHubFeatureMembership#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Matches a taint operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#operator GkeHubFeatureMembership#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Matches a taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#value GkeHubFeatureMembership#value}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring.property.backends">backends</a></code> | <code>string[]</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `backends`<sup>Optional</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring.property.backends"></a>

```typescript
public readonly backends: string[];
```

- *Type:* string[]

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent.property.bundles">bundles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]</code> | bundles block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent.property.templateLibrary">templateLibrary</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | template_library block. |

---

##### `bundles`<sup>Optional</sup> <a name="bundles" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent.property.bundles"></a>

```typescript
public readonly bundles: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]

bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#bundles GkeHubFeatureMembership#bundles}

---

##### `templateLibrary`<sup>Optional</sup> <a name="templateLibrary" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent.property.templateLibrary"></a>

```typescript
public readonly templateLibrary: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

template_library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#template_library GkeHubFeatureMembership#template_library}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.bundleName">bundleName</a></code> | <code>string</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.exemptedNamespaces">exemptedNamespaces</a></code> | <code>string[]</code> | The set of namespaces to be exempted from the bundle. |

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.bundleName"></a>

```typescript
public readonly bundleName: string;
```

- *Type:* string

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#bundle_name GkeHubFeatureMembership#bundle_name}

---

##### `exemptedNamespaces`<sup>Optional</sup> <a name="exemptedNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.exemptedNamespaces"></a>

```typescript
public readonly exemptedNamespaces: string[];
```

- *Type:* string[]

The set of namespaces to be exempted from the bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#exempted_namespaces GkeHubFeatureMembership#exempted_namespaces}

---

### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary: gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.property.installation">installation</a></code> | <code>string</code> | Configures the manner in which the template library is installed on the cluster. Possible values: INSTALLATION_UNSPECIFIED, NOT_INSTALLED, ALL. |

---

##### `installation`<sup>Optional</sup> <a name="installation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.property.installation"></a>

```typescript
public readonly installation: string;
```

- *Type:* string

Configures the manner in which the template library is installed on the cluster. Possible values: INSTALLATION_UNSPECIFIED, NOT_INSTALLED, ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#installation GkeHubFeatureMembership#installation}

---

### GkeHubFeatureMembershipTimeouts <a name="GkeHubFeatureMembershipTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

const gkeHubFeatureMembershipTimeouts: gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference <a name="GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementBinauthz;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">resetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">resetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">resetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">resetSyncBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">resetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev">resetSyncRev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">resetSyncWaitSecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcpServiceAccountEmail` <a name="resetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```typescript
public resetGcpServiceAccountEmail(): void
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```typescript
public resetHttpsProxy(): void
```

##### `resetPolicyDir` <a name="resetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```typescript
public resetPolicyDir(): void
```

##### `resetSecretType` <a name="resetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType"></a>

```typescript
public resetSecretType(): void
```

##### `resetSyncBranch` <a name="resetSyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```typescript
public resetSyncBranch(): void
```

##### `resetSyncRepo` <a name="resetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```typescript
public resetSyncRepo(): void
```

##### `resetSyncRev` <a name="resetSyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```typescript
public resetSyncRev(): void
```

##### `resetSyncWaitSecs` <a name="resetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```typescript
public resetSyncWaitSecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">gcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">httpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">policyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">syncBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">syncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">syncRevInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">syncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">gcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir">policyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch">syncBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo">syncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev">syncRev</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">syncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpServiceAccountEmailInput`<sup>Optional</sup> <a name="gcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```typescript
public readonly gcpServiceAccountEmailInput: string;
```

- *Type:* string

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```typescript
public readonly httpsProxyInput: string;
```

- *Type:* string

---

##### `policyDirInput`<sup>Optional</sup> <a name="policyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```typescript
public readonly policyDirInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `syncBranchInput`<sup>Optional</sup> <a name="syncBranchInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```typescript
public readonly syncBranchInput: string;
```

- *Type:* string

---

##### `syncRepoInput`<sup>Optional</sup> <a name="syncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```typescript
public readonly syncRepoInput: string;
```

- *Type:* string

---

##### `syncRevInput`<sup>Optional</sup> <a name="syncRevInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```typescript
public readonly syncRevInput: string;
```

- *Type:* string

---

##### `syncWaitSecsInput`<sup>Optional</sup> <a name="syncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```typescript
public readonly syncWaitSecsInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountEmail`<sup>Required</sup> <a name="gcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```typescript
public readonly gcpServiceAccountEmail: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Required</sup> <a name="httpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

##### `policyDir`<sup>Required</sup> <a name="policyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```typescript
public readonly policyDir: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `syncBranch`<sup>Required</sup> <a name="syncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```typescript
public readonly syncBranch: string;
```

- *Type:* string

---

##### `syncRepo`<sup>Required</sup> <a name="syncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```typescript
public readonly syncRepo: string;
```

- *Type:* string

---

##### `syncRev`<sup>Required</sup> <a name="syncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```typescript
public readonly syncRev: string;
```

- *Type:* string

---

##### `syncWaitSecs`<sup>Required</sup> <a name="syncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```typescript
public readonly syncWaitSecs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementConfigSyncGit;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">resetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">resetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">resetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">resetSyncWaitSecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcpServiceAccountEmail` <a name="resetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```typescript
public resetGcpServiceAccountEmail(): void
```

##### `resetPolicyDir` <a name="resetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```typescript
public resetPolicyDir(): void
```

##### `resetSecretType` <a name="resetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType"></a>

```typescript
public resetSecretType(): void
```

##### `resetSyncRepo` <a name="resetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```typescript
public resetSyncRepo(): void
```

##### `resetSyncWaitSecs` <a name="resetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```typescript
public resetSyncWaitSecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">gcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">policyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">syncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">syncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">gcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir">policyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo">syncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">syncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpServiceAccountEmailInput`<sup>Optional</sup> <a name="gcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```typescript
public readonly gcpServiceAccountEmailInput: string;
```

- *Type:* string

---

##### `policyDirInput`<sup>Optional</sup> <a name="policyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```typescript
public readonly policyDirInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `syncRepoInput`<sup>Optional</sup> <a name="syncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```typescript
public readonly syncRepoInput: string;
```

- *Type:* string

---

##### `syncWaitSecsInput`<sup>Optional</sup> <a name="syncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```typescript
public readonly syncWaitSecsInput: string;
```

- *Type:* string

---

##### `gcpServiceAccountEmail`<sup>Required</sup> <a name="gcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```typescript
public readonly gcpServiceAccountEmail: string;
```

- *Type:* string

---

##### `policyDir`<sup>Required</sup> <a name="policyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```typescript
public readonly policyDir: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `syncRepo`<sup>Required</sup> <a name="syncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```typescript
public readonly syncRepo: string;
```

- *Type:* string

---

##### `syncWaitSecs`<sup>Required</sup> <a name="syncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```typescript
public readonly syncWaitSecs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementConfigSyncOci;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit">putGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci">putOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit">resetGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetMetricsGcpServiceAccountEmail">resetMetricsGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci">resetOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift">resetPreventDrift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat">resetSourceFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGit` <a name="putGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit"></a>

```typescript
public putGit(value: GkeHubFeatureMembershipConfigmanagementConfigSyncGit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `putOci` <a name="putOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci"></a>

```typescript
public putOci(value: GkeHubFeatureMembershipConfigmanagementConfigSyncOci): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGit` <a name="resetGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit"></a>

```typescript
public resetGit(): void
```

##### `resetMetricsGcpServiceAccountEmail` <a name="resetMetricsGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetMetricsGcpServiceAccountEmail"></a>

```typescript
public resetMetricsGcpServiceAccountEmail(): void
```

##### `resetOci` <a name="resetOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci"></a>

```typescript
public resetOci(): void
```

##### `resetPreventDrift` <a name="resetPreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```typescript
public resetPreventDrift(): void
```

##### `resetSourceFormat` <a name="resetSourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```typescript
public resetSourceFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git">git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput">gitInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmailInput">metricsGcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput">ociInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput">preventDriftInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmail">metricsGcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift">preventDrift</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git"></a>

```typescript
public readonly git: GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a>

---

##### `oci`<sup>Required</sup> <a name="oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci"></a>

```typescript
public readonly oci: GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitInput`<sup>Optional</sup> <a name="gitInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```typescript
public readonly gitInput: GkeHubFeatureMembershipConfigmanagementConfigSyncGit;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `metricsGcpServiceAccountEmailInput`<sup>Optional</sup> <a name="metricsGcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmailInput"></a>

```typescript
public readonly metricsGcpServiceAccountEmailInput: string;
```

- *Type:* string

---

##### `ociInput`<sup>Optional</sup> <a name="ociInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```typescript
public readonly ociInput: GkeHubFeatureMembershipConfigmanagementConfigSyncOci;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `preventDriftInput`<sup>Optional</sup> <a name="preventDriftInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```typescript
public readonly preventDriftInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```typescript
public readonly sourceFormatInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricsGcpServiceAccountEmail`<sup>Required</sup> <a name="metricsGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmail"></a>

```typescript
public readonly metricsGcpServiceAccountEmail: string;
```

- *Type:* string

---

##### `preventDrift`<sup>Required</sup> <a name="preventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```typescript
public readonly preventDrift: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementConfigSync;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---


### GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota">resetEnableHierarchicalResourceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels">resetEnablePodTreeLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnableHierarchicalResourceQuota` <a name="resetEnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota"></a>

```typescript
public resetEnableHierarchicalResourceQuota(): void
```

##### `resetEnablePodTreeLabels` <a name="resetEnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels"></a>

```typescript
public resetEnablePodTreeLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput">enableHierarchicalResourceQuotaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput">enablePodTreeLabelsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota">enableHierarchicalResourceQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels">enablePodTreeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHierarchicalResourceQuotaInput`<sup>Optional</sup> <a name="enableHierarchicalResourceQuotaInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput"></a>

```typescript
public readonly enableHierarchicalResourceQuotaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePodTreeLabelsInput`<sup>Optional</sup> <a name="enablePodTreeLabelsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput"></a>

```typescript
public readonly enablePodTreeLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHierarchicalResourceQuota`<sup>Required</sup> <a name="enableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota"></a>

```typescript
public readonly enableHierarchicalResourceQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePodTreeLabels`<sup>Required</sup> <a name="enablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels"></a>

```typescript
public readonly enablePodTreeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementHierarchyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---


### GkeHubFeatureMembershipConfigmanagementOutputReference <a name="GkeHubFeatureMembershipConfigmanagementOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz">putBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync">putConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController">putHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController">putPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz">resetBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync">resetConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController">resetHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController">resetPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBinauthz` <a name="putBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz"></a>

```typescript
public putBinauthz(value: GkeHubFeatureMembershipConfigmanagementBinauthz): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `putConfigSync` <a name="putConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync"></a>

```typescript
public putConfigSync(value: GkeHubFeatureMembershipConfigmanagementConfigSync): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `putHierarchyController` <a name="putHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController"></a>

```typescript
public putHierarchyController(value: GkeHubFeatureMembershipConfigmanagementHierarchyController): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `putPolicyController` <a name="putPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController"></a>

```typescript
public putPolicyController(value: GkeHubFeatureMembershipConfigmanagementPolicyController): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `resetBinauthz` <a name="resetBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz"></a>

```typescript
public resetBinauthz(): void
```

##### `resetConfigSync` <a name="resetConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync"></a>

```typescript
public resetConfigSync(): void
```

##### `resetHierarchyController` <a name="resetHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController"></a>

```typescript
public resetHierarchyController(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetPolicyController` <a name="resetPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController"></a>

```typescript
public resetPolicyController(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz">binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync">configSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController">hierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController">policyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput">binauthzInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput">configSyncInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput">hierarchyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.managementInput">managementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput">policyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.management">management</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binauthz`<sup>Required</sup> <a name="binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz"></a>

```typescript
public readonly binauthz: GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a>

---

##### `configSync`<sup>Required</sup> <a name="configSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync"></a>

```typescript
public readonly configSync: GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a>

---

##### `hierarchyController`<sup>Required</sup> <a name="hierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController"></a>

```typescript
public readonly hierarchyController: GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a>

---

##### `policyController`<sup>Required</sup> <a name="policyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController"></a>

```typescript
public readonly policyController: GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a>

---

##### `binauthzInput`<sup>Optional</sup> <a name="binauthzInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput"></a>

```typescript
public readonly binauthzInput: GkeHubFeatureMembershipConfigmanagementBinauthz;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `configSyncInput`<sup>Optional</sup> <a name="configSyncInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput"></a>

```typescript
public readonly configSyncInput: GkeHubFeatureMembershipConfigmanagementConfigSync;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `hierarchyControllerInput`<sup>Optional</sup> <a name="hierarchyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput"></a>

```typescript
public readonly hierarchyControllerInput: GkeHubFeatureMembershipConfigmanagementHierarchyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.managementInput"></a>

```typescript
public readonly managementInput: string;
```

- *Type:* string

---

##### `policyControllerInput`<sup>Optional</sup> <a name="policyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput"></a>

```typescript
public readonly policyControllerInput: GkeHubFeatureMembershipConfigmanagementPolicyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.management"></a>

```typescript
public readonly management: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagement;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends">resetBackends</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackends` <a name="resetBackends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends"></a>

```typescript
public resetBackends(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput">backendsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends">backends</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendsInput`<sup>Optional</sup> <a name="backendsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput"></a>

```typescript
public readonly backendsInput: string[];
```

- *Type:* string[]

---

##### `backends`<sup>Required</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends"></a>

```typescript
public readonly backends: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds">resetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces">resetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled">resetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled">resetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled">resetReferentialRulesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled">resetTemplateLibraryInstalled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring"></a>

```typescript
public putMonitoring(value: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `resetAuditIntervalSeconds` <a name="resetAuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds"></a>

```typescript
public resetAuditIntervalSeconds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExemptableNamespaces` <a name="resetExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces"></a>

```typescript
public resetExemptableNamespaces(): void
```

##### `resetLogDeniesEnabled` <a name="resetLogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled"></a>

```typescript
public resetLogDeniesEnabled(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetMutationEnabled` <a name="resetMutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled"></a>

```typescript
public resetMutationEnabled(): void
```

##### `resetReferentialRulesEnabled` <a name="resetReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled"></a>

```typescript
public resetReferentialRulesEnabled(): void
```

##### `resetTemplateLibraryInstalled` <a name="resetTemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled"></a>

```typescript
public resetTemplateLibraryInstalled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput">auditIntervalSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput">exemptableNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput">logDeniesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput">mutationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput">referentialRulesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput">templateLibraryInstalledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds">auditIntervalSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces">exemptableNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled">logDeniesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled">mutationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled">referentialRulesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled">templateLibraryInstalled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a>

---

##### `auditIntervalSecondsInput`<sup>Optional</sup> <a name="auditIntervalSecondsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput"></a>

```typescript
public readonly auditIntervalSecondsInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exemptableNamespacesInput`<sup>Optional</sup> <a name="exemptableNamespacesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput"></a>

```typescript
public readonly exemptableNamespacesInput: string[];
```

- *Type:* string[]

---

##### `logDeniesEnabledInput`<sup>Optional</sup> <a name="logDeniesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput"></a>

```typescript
public readonly logDeniesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `mutationEnabledInput`<sup>Optional</sup> <a name="mutationEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput"></a>

```typescript
public readonly mutationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `referentialRulesEnabledInput`<sup>Optional</sup> <a name="referentialRulesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput"></a>

```typescript
public readonly referentialRulesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `templateLibraryInstalledInput`<sup>Optional</sup> <a name="templateLibraryInstalledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput"></a>

```typescript
public readonly templateLibraryInstalledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditIntervalSeconds`<sup>Required</sup> <a name="auditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds"></a>

```typescript
public readonly auditIntervalSeconds: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exemptableNamespaces`<sup>Required</sup> <a name="exemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces"></a>

```typescript
public readonly exemptableNamespaces: string[];
```

- *Type:* string[]

---

##### `logDeniesEnabled`<sup>Required</sup> <a name="logDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled"></a>

```typescript
public readonly logDeniesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mutationEnabled`<sup>Required</sup> <a name="mutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled"></a>

```typescript
public readonly mutationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `referentialRulesEnabled`<sup>Required</sup> <a name="referentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled"></a>

```typescript
public readonly referentialRulesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `templateLibraryInstalled`<sup>Required</sup> <a name="templateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled"></a>

```typescript
public readonly templateLibraryInstalled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipConfigmanagementPolicyController;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---


### GkeHubFeatureMembershipMeshOutputReference <a name="GkeHubFeatureMembershipMeshOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane">resetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement">resetManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControlPlane` <a name="resetControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane"></a>

```typescript
public resetControlPlane(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement"></a>

```typescript
public resetManagement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput">controlPlaneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput">managementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane">controlPlane</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management">management</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput"></a>

```typescript
public readonly managementInput: string;
```

- *Type:* string

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane"></a>

```typescript
public readonly controlPlane: string;
```

- *Type:* string

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management"></a>

```typescript
public readonly management: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipMesh;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---


### GkeHubFeatureMembershipPolicycontrollerOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.putPolicyControllerHubConfig">putPolicyControllerHubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicyControllerHubConfig` <a name="putPolicyControllerHubConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.putPolicyControllerHubConfig"></a>

```typescript
public putPolicyControllerHubConfig(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a>

---

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.policyControllerHubConfig">policyControllerHubConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.policyControllerHubConfigInput">policyControllerHubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyControllerHubConfig`<sup>Required</sup> <a name="policyControllerHubConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.policyControllerHubConfig"></a>

```typescript
public readonly policyControllerHubConfig: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference</a>

---

##### `policyControllerHubConfigInput`<sup>Optional</sup> <a name="policyControllerHubConfigInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.policyControllerHubConfigInput"></a>

```typescript
public readonly policyControllerHubConfigInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontroller;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontroller">GkeHubFeatureMembershipPolicycontroller</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits"></a>

```typescript
public putLimits(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

---

##### `putRequests` <a name="putRequests" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests"></a>

```typescript
public putRequests(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

---

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requestsInput">requestsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference</a>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get"></a>

```typescript
public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources">putContainerResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodTolerations">putPodTolerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetContainerResources">resetContainerResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodAffinity">resetPodAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodTolerations">resetPodTolerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerResources` <a name="putContainerResources" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources"></a>

```typescript
public putContainerResources(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

---

##### `putPodTolerations` <a name="putPodTolerations" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodTolerations"></a>

```typescript
public putPodTolerations(value: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodTolerations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]

---

##### `resetContainerResources` <a name="resetContainerResources" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetContainerResources"></a>

```typescript
public resetContainerResources(): void
```

##### `resetPodAffinity` <a name="resetPodAffinity" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodAffinity"></a>

```typescript
public resetPodAffinity(): void
```

##### `resetPodTolerations` <a name="resetPodTolerations" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodTolerations"></a>

```typescript
public resetPodTolerations(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResources">containerResources</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerations">podTolerations</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentNameInput">componentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResourcesInput">containerResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinityInput">podAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerationsInput">podTolerationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentName">componentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinity">podAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerResources`<sup>Required</sup> <a name="containerResources" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResources"></a>

```typescript
public readonly containerResources: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference</a>

---

##### `podTolerations`<sup>Required</sup> <a name="podTolerations" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerations"></a>

```typescript
public readonly podTolerations: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList</a>

---

##### `componentNameInput`<sup>Optional</sup> <a name="componentNameInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentNameInput"></a>

```typescript
public readonly componentNameInput: string;
```

- *Type:* string

---

##### `containerResourcesInput`<sup>Optional</sup> <a name="containerResourcesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResourcesInput"></a>

```typescript
public readonly containerResourcesInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

---

##### `podAffinityInput`<sup>Optional</sup> <a name="podAffinityInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinityInput"></a>

```typescript
public readonly podAffinityInput: string;
```

- *Type:* string

---

##### `podTolerationsInput`<sup>Optional</sup> <a name="podTolerationsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerationsInput"></a>

```typescript
public readonly podTolerationsInput: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

---

##### `podAffinity`<sup>Required</sup> <a name="podAffinity" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinity"></a>

```typescript
public readonly podAffinity: string;
```

- *Type:* string

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.get"></a>

```typescript
public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>[]

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resetBackends">resetBackends</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackends` <a name="resetBackends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resetBackends"></a>

```typescript
public resetBackends(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backendsInput">backendsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backends">backends</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendsInput`<sup>Optional</sup> <a name="backendsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backendsInput"></a>

```typescript
public readonly backendsInput: string[];
```

- *Type:* string[]

---

##### `backends`<sup>Required</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backends"></a>

```typescript
public readonly backends: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs">putDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent">putPolicyContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetAuditIntervalSeconds">resetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetConstraintViolationLimit">resetConstraintViolationLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetDeploymentConfigs">resetDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetExemptableNamespaces">resetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetInstallSpec">resetInstallSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetLogDeniesEnabled">resetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetMutationEnabled">resetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetPolicyContent">resetPolicyContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetReferentialRulesEnabled">resetReferentialRulesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeploymentConfigs` <a name="putDeploymentConfigs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs"></a>

```typescript
public putDeploymentConfigs(value: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring"></a>

```typescript
public putMonitoring(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a>

---

##### `putPolicyContent` <a name="putPolicyContent" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent"></a>

```typescript
public putPolicyContent(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

---

##### `resetAuditIntervalSeconds` <a name="resetAuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetAuditIntervalSeconds"></a>

```typescript
public resetAuditIntervalSeconds(): void
```

##### `resetConstraintViolationLimit` <a name="resetConstraintViolationLimit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetConstraintViolationLimit"></a>

```typescript
public resetConstraintViolationLimit(): void
```

##### `resetDeploymentConfigs` <a name="resetDeploymentConfigs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetDeploymentConfigs"></a>

```typescript
public resetDeploymentConfigs(): void
```

##### `resetExemptableNamespaces` <a name="resetExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetExemptableNamespaces"></a>

```typescript
public resetExemptableNamespaces(): void
```

##### `resetInstallSpec` <a name="resetInstallSpec" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetInstallSpec"></a>

```typescript
public resetInstallSpec(): void
```

##### `resetLogDeniesEnabled` <a name="resetLogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetLogDeniesEnabled"></a>

```typescript
public resetLogDeniesEnabled(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetMutationEnabled` <a name="resetMutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetMutationEnabled"></a>

```typescript
public resetMutationEnabled(): void
```

##### `resetPolicyContent` <a name="resetPolicyContent" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetPolicyContent"></a>

```typescript
public resetPolicyContent(): void
```

##### `resetReferentialRulesEnabled` <a name="resetReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.resetReferentialRulesEnabled"></a>

```typescript
public resetReferentialRulesEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContent">policyContent</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSecondsInput">auditIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimitInput">constraintViolationLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigsInput">deploymentConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespacesInput">exemptableNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpecInput">installSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabledInput">logDeniesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabledInput">mutationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContentInput">policyContentInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabledInput">referentialRulesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSeconds">auditIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimit">constraintViolationLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespaces">exemptableNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpec">installSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabled">logDeniesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabled">mutationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabled">referentialRulesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentConfigs`<sup>Required</sup> <a name="deploymentConfigs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigs"></a>

```typescript
public readonly deploymentConfigs: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference</a>

---

##### `policyContent`<sup>Required</sup> <a name="policyContent" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContent"></a>

```typescript
public readonly policyContent: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference</a>

---

##### `auditIntervalSecondsInput`<sup>Optional</sup> <a name="auditIntervalSecondsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSecondsInput"></a>

```typescript
public readonly auditIntervalSecondsInput: number;
```

- *Type:* number

---

##### `constraintViolationLimitInput`<sup>Optional</sup> <a name="constraintViolationLimitInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimitInput"></a>

```typescript
public readonly constraintViolationLimitInput: number;
```

- *Type:* number

---

##### `deploymentConfigsInput`<sup>Optional</sup> <a name="deploymentConfigsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigsInput"></a>

```typescript
public readonly deploymentConfigsInput: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>[]

---

##### `exemptableNamespacesInput`<sup>Optional</sup> <a name="exemptableNamespacesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespacesInput"></a>

```typescript
public readonly exemptableNamespacesInput: string[];
```

- *Type:* string[]

---

##### `installSpecInput`<sup>Optional</sup> <a name="installSpecInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpecInput"></a>

```typescript
public readonly installSpecInput: string;
```

- *Type:* string

---

##### `logDeniesEnabledInput`<sup>Optional</sup> <a name="logDeniesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabledInput"></a>

```typescript
public readonly logDeniesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring</a>

---

##### `mutationEnabledInput`<sup>Optional</sup> <a name="mutationEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabledInput"></a>

```typescript
public readonly mutationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyContentInput`<sup>Optional</sup> <a name="policyContentInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContentInput"></a>

```typescript
public readonly policyContentInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

---

##### `referentialRulesEnabledInput`<sup>Optional</sup> <a name="referentialRulesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabledInput"></a>

```typescript
public readonly referentialRulesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditIntervalSeconds`<sup>Required</sup> <a name="auditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSeconds"></a>

```typescript
public readonly auditIntervalSeconds: number;
```

- *Type:* number

---

##### `constraintViolationLimit`<sup>Required</sup> <a name="constraintViolationLimit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimit"></a>

```typescript
public readonly constraintViolationLimit: number;
```

- *Type:* number

---

##### `exemptableNamespaces`<sup>Required</sup> <a name="exemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespaces"></a>

```typescript
public readonly exemptableNamespaces: string[];
```

- *Type:* string[]

---

##### `installSpec`<sup>Required</sup> <a name="installSpec" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpec"></a>

```typescript
public readonly installSpec: string;
```

- *Type:* string

---

##### `logDeniesEnabled`<sup>Required</sup> <a name="logDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabled"></a>

```typescript
public readonly logDeniesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mutationEnabled`<sup>Required</sup> <a name="mutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabled"></a>

```typescript
public readonly mutationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `referentialRulesEnabled`<sup>Required</sup> <a name="referentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabled"></a>

```typescript
public readonly referentialRulesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get"></a>

```typescript
public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resetExemptedNamespaces">resetExemptedNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExemptedNamespaces` <a name="resetExemptedNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resetExemptedNamespaces"></a>

```typescript
public resetExemptedNamespaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleNameInput">bundleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespacesInput">exemptedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleName">bundleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespaces">exemptedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleNameInput`<sup>Optional</sup> <a name="bundleNameInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleNameInput"></a>

```typescript
public readonly bundleNameInput: string;
```

- *Type:* string

---

##### `exemptedNamespacesInput`<sup>Optional</sup> <a name="exemptedNamespacesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespacesInput"></a>

```typescript
public readonly exemptedNamespacesInput: string[];
```

- *Type:* string[]

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleName"></a>

```typescript
public readonly bundleName: string;
```

- *Type:* string

---

##### `exemptedNamespaces`<sup>Required</sup> <a name="exemptedNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespaces"></a>

```typescript
public readonly exemptedNamespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles">putBundles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary">putTemplateLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetBundles">resetBundles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetTemplateLibrary">resetTemplateLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBundles` <a name="putBundles" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles"></a>

```typescript
public putBundles(value: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]

---

##### `putTemplateLibrary` <a name="putTemplateLibrary" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary"></a>

```typescript
public putTemplateLibrary(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

---

##### `resetBundles` <a name="resetBundles" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetBundles"></a>

```typescript
public resetBundles(): void
```

##### `resetTemplateLibrary` <a name="resetTemplateLibrary" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetTemplateLibrary"></a>

```typescript
public resetTemplateLibrary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundles">bundles</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibrary">templateLibrary</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundlesInput">bundlesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibraryInput">templateLibraryInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundles`<sup>Required</sup> <a name="bundles" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundles"></a>

```typescript
public readonly bundles: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList</a>

---

##### `templateLibrary`<sup>Required</sup> <a name="templateLibrary" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibrary"></a>

```typescript
public readonly templateLibrary: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference</a>

---

##### `bundlesInput`<sup>Optional</sup> <a name="bundlesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundlesInput"></a>

```typescript
public readonly bundlesInput: IResolvable | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>[]

---

##### `templateLibraryInput`<sup>Optional</sup> <a name="templateLibraryInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibraryInput"></a>

```typescript
public readonly templateLibraryInput: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

---


### GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference <a name="GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resetInstallation">resetInstallation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstallation` <a name="resetInstallation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resetInstallation"></a>

```typescript
public resetInstallation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installationInput">installationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installation">installation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `installationInput`<sup>Optional</sup> <a name="installationInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installationInput"></a>

```typescript
public readonly installationInput: string;
```

- *Type:* string

---

##### `installation`<sup>Required</sup> <a name="installation" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installation"></a>

```typescript
public readonly installation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

---


### GkeHubFeatureMembershipTimeoutsOutputReference <a name="GkeHubFeatureMembershipTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeHubFeatureMembership } from '@cdktf/provider-google'

new gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeHubFeatureMembershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

---



