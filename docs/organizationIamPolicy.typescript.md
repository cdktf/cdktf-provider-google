# `google_organization_iam_policy`

Refer to the Terraform Registory for docs: [`google_organization_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy).

# `organizationIamPolicy` Submodule <a name="`organizationIamPolicy` Submodule" id="@cdktf/provider-google.organizationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationIamPolicy <a name="OrganizationIamPolicy" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy google_organization_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer"></a>

```typescript
import { organizationIamPolicy } from '@cdktf/provider-google'

new organizationIamPolicy.OrganizationIamPolicy(scope: Construct, id: string, config: OrganizationIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig">OrganizationIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig">OrganizationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isConstruct"></a>

```typescript
import { organizationIamPolicy } from '@cdktf/provider-google'

organizationIamPolicy.OrganizationIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformElement"></a>

```typescript
import { organizationIamPolicy } from '@cdktf/provider-google'

organizationIamPolicy.OrganizationIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformResource"></a>

```typescript
import { organizationIamPolicy } from '@cdktf/provider-google'

organizationIamPolicy.OrganizationIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationIamPolicyConfig <a name="OrganizationIamPolicyConfig" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.Initializer"></a>

```typescript
import { organizationIamPolicy } from '@cdktf/provider-google'

const organizationIamPolicyConfig: organizationIamPolicy.OrganizationIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.orgId">orgId</a></code> | <code>string</code> | The numeric ID of the organization in which you want to manage the audit logging config. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy#policy_data OrganizationIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy#id OrganizationIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The numeric ID of the organization in which you want to manage the audit logging config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy#org_id OrganizationIamPolicy#org_id}

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy#policy_data OrganizationIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.organizationIamPolicy.OrganizationIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/organization_iam_policy#id OrganizationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



